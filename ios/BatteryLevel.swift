//
//  BatteryLevel.swift
//  NativeModuleTesting
//
//  Created by Niall Barber on 06/12/2023.
//

import Foundation
import UIKit

@objc(BatteryLevel)
class BatteryLevel: NSObject {
  
  @objc
  func getCurrentBatteryChargeLevel(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      UIDevice.current.isBatteryMonitoringEnabled = true
      
      let batteryState = UIDevice.current.batteryState
      if batteryState == .unknown {
          // If battery state is unknown, reject the promise
          reject("E_UNAVAILABLE", "Battery level is unavailable", nil)
      } else {
          // Get the battery level
          let batteryLevel = UIDevice.current.batteryLevel
          if batteryLevel < 0 {
              // If battery level is unavailable, reject the promise
              reject("E_UNAVAILABLE", "Battery level is unavailable", nil)
          } else {
              // Resolve the promise with the battery level as a percentage
              let batteryPercentage = batteryLevel * 100
              resolve(batteryPercentage)
          }
      }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["batteryLevel": 0];
  }
}

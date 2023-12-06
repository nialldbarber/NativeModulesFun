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
          reject("E_UNAVAILABLE", "Battery level is unavailable", nil)
      } else {
          let batteryLevel = UIDevice.current.batteryLevel
          if batteryLevel < 0 {
              reject("E_UNAVAILABLE", "Battery level is unavailable", nil)
          } else {
              let batteryPercentage = batteryLevel * 100
              resolve(batteryPercentage)
          }
      }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
}

//
//  BatteryLevelModule.m
//  NativeModuleTesting
//
//  Created by Niall Barber on 06/12/2023.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(BatteryLevel,NSObject)
RCT_EXTERN_METHOD(getCurrentBatteryChargeLevel:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end

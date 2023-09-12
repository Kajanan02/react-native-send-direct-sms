
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSendDirectSmsSpec.h"

@interface SendDirectSms : NSObject <NativeSendDirectSmsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SendDirectSms : NSObject <RCTBridgeModule>
#endif

@end

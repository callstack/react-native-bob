#import "<%- project.name -%>.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import "RN<%- project.name -%>Spec.h"
#endif

@implementation <%- project.name -%>

RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
<% if (project.architecture == 'turbo') { -%>
RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(multiply,
                                      NSNumber *,
                                      multiplyWithA:(double)a  withB:(double)b)
{
    NSNumber *result = @(a * b);

    return result;
}
<% } else { -%>
RCT_REMAP_METHOD(multiply,
                 multiplyWithA:(double)a withB:(double)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSNumber *result = @(a * b);

  resolve(result);
}
<% } -%>

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::Native<%- project.name -%>SpecJSI>(params);
}
#endif

@end

//
//  ViewController.h
//  Braintree-iOS-Dropin
//
//  Created by Alan Wong on 24/8/14.
//  Copyright (c) 2014 alawong. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Braintree/Braintree.h>

@interface ViewController : UIViewController <BTDropInViewControllerDelegate>

@property Braintree *braintree;
@property NSString *clientToken;
@property NSString *nonce;

- (IBAction)onBuyNow:(id)sender;

@end

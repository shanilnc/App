import React, { useState } from 'react';
import { X, Lock, CreditCard, Smartphone, QrCode } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
  courseName: string;
  price: string;
}

type PaymentMethod = 'card' | 'upi';

export function PaymentModal({ isOpen, onClose, onPaymentSuccess, courseName, price }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-in slide-in-from-bottom duration-300 md:slide-in-from-bottom-0 md:zoom-in-95">
        {/* Header */}
        <div className="relative border-b border-gray-200 p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Payment</h2>
          <p className="text-sm text-gray-600">{courseName}</p>
          <div className="flex items-center gap-2 mt-3">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">Secure Payment</span>
          </div>
        </div>

        {/* Price Summary */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#48BB78]/5 to-[#38A169]/5 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Total Amount</span>
            <span className="text-3xl font-bold text-[#48BB78]">{price}</span>
          </div>
        </div>

        {/* Payment Method Tabs */}
        <div className="px-6 pt-6">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                paymentMethod === 'card'
                  ? 'bg-[#48BB78] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Card
            </button>
            <button
              onClick={() => setPaymentMethod('upi')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                paymentMethod === 'upi'
                  ? 'bg-[#48BB78] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              UPI
            </button>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="cardNumber" className="text-gray-700 font-medium mb-2">
                  Card Number
                </Label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="text-gray-700 font-medium mb-2">
                    Expiry Date
                  </Label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv" className="text-gray-700 font-medium mb-2">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cardName" className="text-gray-700 font-medium mb-2">
                  Cardholder Name
                </Label>
                <Input
                  id="cardName"
                  type="text"
                  placeholder="JOHN DOE"
                  className="mt-1 uppercase"
                />
              </div>
            </div>
          )}

          {/* UPI Payment Form */}
          {paymentMethod === 'upi' && (
            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="upiId" className="text-gray-700 font-medium mb-2">
                  UPI ID
                </Label>
                <Input
                  id="upiId"
                  type="text"
                  placeholder="yourname@upi"
                  className="mt-1"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or scan QR code</span>
                </div>
              </div>
              <div className="flex justify-center p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <QrCode className="w-16 h-16 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">QR Code Placeholder</p>
                </div>
              </div>
            </div>
          )}

          {/* Demo Notice */}
          <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-800 text-center">
              ℹ️ This is a demo payment. No real transaction will be made.
            </p>
          </div>
        </div>

        {/* Payment Button */}
        <div className="px-6 pb-6">
          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full h-12 bg-gradient-to-r from-[#48BB78] to-[#38A169] hover:from-[#3EA76A] hover:to-[#2F855A] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </div>
            ) : (
              `Pay ${price}`
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

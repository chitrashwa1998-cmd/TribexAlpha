import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Brain, Shield, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const candlestickData = [
  // Initial uptrend
  { x: 30, open: 100, close: 115, high: 118, low: 98, volume: 45 },
  { x: 60, open: 115, close: 125, high: 130, low: 112, volume: 52 },
  { x: 90, open: 125, close: 140, high: 145, low: 120, volume: 38 },
  
  // First retracement (HL formation)
  { x: 120, open: 140, close: 132, high: 142, low: 128, volume: 65 },
  { x: 150, open: 132, close: 125, high: 135, low: 122, volume: 48 },
  
  // Higher high formation
  { x: 180, open: 125, close: 135, high: 138, low: 123, volume: 42 },
  { x: 210, open: 135, close: 150, high: 155, low: 132, volume: 55 },
  { x: 240, open: 150, close: 165, high: 170, low: 148, volume: 60 },
  
  // Second retracement (another HL)
  { x: 270, open: 165, close: 158, high: 167, low: 155, volume: 38 },
  { x: 300, open: 158, close: 148, high: 160, low: 145, volume: 45 },
  { x: 330, open: 148, close: 155, high: 158, low: 146, volume: 35 },
  
  // Another higher high
  { x: 360, open: 155, close: 170, high: 175, low: 152, volume: 58 },
  { x: 390, open: 170, close: 185, high: 190, low: 168, volume: 65 },
  
  // Small pullback and continuation
  { x: 420, open: 185, close: 178, high: 188, low: 175, volume: 40 },
  { x: 450, open: 178, close: 188, high: 192, low: 176, volume: 48 },
  { x: 480, open: 188, close: 200, high: 205, low: 185, volume: 72 },
  { x: 510, open: 200, close: 195, high: 202, low: 192, volume: 35 },
  { x: 540, open: 195, close: 210, high: 215, low: 193, volume: 55 },
];

const orderBookData = {
  sellOrders: [
    { price: "₹24,095", quantity: 1250 },
    { price: "₹24,090", quantity: 850 },
    { price: "₹24,088", quantity: 2100 },
  ],
  buyOrders: [
    { price: "₹24,082", quantity: 1850 },
    { price: "₹24,078", quantity: 950 },
    { price: "₹24,075", quantity: 3200 },
  ],
};

export default function TradingDashboard() {

  return (
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" data-testid="platform-title">
            Professional Trading
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Interface
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="platform-description">
            Experience institutional-grade trading tools designed for both novice and professional traders.
          </p>
        </div>

        <Card className="bg-card rounded-3xl border border-border shadow-2xl">
          <CardContent className="p-8">
            {/* Trading Dashboard Header */}
            <div className="flex items-center space-x-4 mb-8">
              <h3 className="text-2xl font-bold" data-testid="dashboard-header-title">Trading Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full pulse-dot"></div>
                <span className="text-sm text-muted-foreground">Live Market Data</span>
              </div>
            </div>

            {/* Main Trading Interface */}
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Chart Area */}
              <div className="lg:col-span-3 space-y-6">
                {/* Price Chart */}
                <Card className="bg-secondary rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold" data-testid="stock-symbol">NIFTY50 - Nifty 50</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-2xl font-bold text-accent" data-testid="stock-price">₹24,085</span>
                          <span className="text-accent text-sm" data-testid="stock-change">+235 (+0.99%)</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm"
                          data-testid="button-buy-quick"
                        >
                          Buy
                        </Button>
                        <Button
                          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm"
                          data-testid="button-sell-quick"
                        >
                          Sell
                        </Button>
                      </div>
                    </div>

                    {/* Advanced Chart */}
                    <div className="h-80 bg-background rounded-xl p-4 overflow-hidden">
                      <div className="w-full h-4/5 relative">
                        <svg width="100%" height="100%" viewBox="0 0 600 300" className="overflow-hidden">
                          {/* Grid Lines */}
                          <defs>
                            <pattern id="grid" width="50" height="30" patternUnits="userSpaceOnUse">
                              <path d="M 50 0 L 0 0 0 30" fill="none" stroke="hsl(217, 32%, 17%)" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />

                          {/* Candlestick Chart */}
                          <g clipPath="url(#chartClip)">
                            <defs>
                              <clipPath id="chartClip">
                                <rect x="0" y="0" width="600" height="300" />
                              </clipPath>
                            </defs>
                            {candlestickData.map((candle, i) => {
                              const isGreen = candle.close > candle.open;
                              const color = isGreen ? "hsl(142, 76%, 36%)" : "hsl(0, 62%, 50%)";
                              const bodyHeight = Math.abs(candle.close - candle.open) * 0.8;
                              const bodyTop = 280 - (Math.max(candle.open, candle.close) * 0.8);
                              const wickTop = 280 - (candle.high * 0.8);
                              const wickBottom = 280 - (candle.low * 0.8);
                              
                              return (
                                <g key={i}>
                                  {/* High-Low Wick */}
                                  <line
                                    x1={candle.x}
                                    y1={wickTop}
                                    x2={candle.x}
                                    y2={wickBottom}
                                    stroke={color}
                                    strokeWidth="1"
                                  />
                                  {/* Candle Body */}
                                  <rect
                                    x={candle.x - 6}
                                    y={Math.max(0, bodyTop)}
                                    width="12"
                                    height={Math.min(bodyHeight, 300 - Math.max(0, bodyTop))}
                                    fill={color}
                                    rx="1"
                                  />
                                </g>
                              );
                            })}
                          </g>

                          {/* Moving Average Line */}
                          <polyline
                            fill="none"
                            stroke="hsl(217, 91%, 60%)"
                            strokeWidth="2"
                            points="30,190 60,170 90,148 120,155 150,165 180,158 210,140 240,118 270,125 300,135 330,130 360,115 390,95 420,102 450,95 480,80 510,85 540,72"
                            opacity="0.8"
                            clipPath="url(#chartClip)"
                          />
                        </svg>
                      </div>

                      {/* Volume Bars */}
                      <div className="h-16 mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={candlestickData}>
                            <XAxis dataKey="x" axisLine={false} tickLine={false} tick={false} />
                            <YAxis hide />
                            <Bar dataKey="volume" fill="hsl(217, 32%, 17%)" opacity="0.6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Market Analysis */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-secondary rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">ML Prediction</span>
                        <Brain className="text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-accent" data-testid="ml-prediction">Bullish</div>
                      <div className="text-xs text-muted-foreground">92% confidence</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Black-Scholes</span>
                        <Shield className="text-yellow-400" />
                      </div>
                      <div className="text-2xl font-bold text-yellow-400" data-testid="black-scholes">₹24,092</div>
                      <div className="text-xs text-muted-foreground">Fair Value</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Order Book Flow</span>
                        <TrendingUp className="text-accent" />
                      </div>
                      <div className="text-2xl font-bold text-accent" data-testid="order-book-flow">+2.3M</div>
                      <div className="text-xs text-muted-foreground">Institutional Flow</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Order Book */}
                <Card className="bg-secondary rounded-2xl">
                  <CardContent className="p-4">
                    <h5 className="font-semibold mb-4" data-testid="orderbook-title">Order Book</h5>
                    <div className="space-y-2">
                      {/* Sell Orders */}
                      <div className="text-xs text-muted-foreground mb-2">Sell Orders</div>
                      <div className="space-y-1">
                        {orderBookData.sellOrders.map((order, i) => (
                          <div key={i} className="flex justify-between text-xs" data-testid={`sell-order-${i}`}>
                            <span className="text-destructive">{order.price}</span>
                            <span>{order.quantity.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      {/* Buy Orders */}
                      <div className="text-xs text-muted-foreground mb-2">Buy Orders</div>
                      <div className="space-y-1">
                        {orderBookData.buyOrders.map((order, i) => (
                          <div key={i} className="flex justify-between text-xs" data-testid={`buy-order-${i}`}>
                            <span className="text-accent">{order.price}</span>
                            <span>{order.quantity.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Model Summary */}
                <Card className="bg-secondary rounded-2xl">
                  <CardContent className="p-4">
                    <h5 className="font-semibold mb-4" data-testid="model-title">Model Status</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Active Models</span>
                        <span className="text-sm font-medium" data-testid="active-models">5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Training Status</span>
                        <span className="text-sm font-medium text-accent" data-testid="training-status">Online</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Market Coverage</span>
                        <span className="text-sm font-medium" data-testid="market-coverage">NSE/BSE</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Data Points</span>
                        <span className="text-sm font-medium" data-testid="data-points">2.4M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Last Update</span>
                        <span className="text-sm font-medium" data-testid="last-update">2 min ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

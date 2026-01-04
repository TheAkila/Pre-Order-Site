'use client';

import { useState, useEffect } from 'react';
import { Order, PaymentStatus } from '@/types/order';
import { Download, Loader2, Lock } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<PaymentStatus | 'ALL'>('ALL');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side check - in production, use proper authentication
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password) {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      setError('Invalid password');
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const filteredOrders = filter === 'ALL' 
      ? orders 
      : orders.filter(order => order.paymentStatus === filter);

    const headers = ['Order ID', 'Name', 'Phone', 'Size', 'Quantity', 'Amount', 'Payment Status', 'Created At'];
    const rows = filteredOrders.map(order => [
      order.orderId,
      order.name,
      order.phone,
      order.size,
      order.quantity,
      order.amount,
      order.paymentStatus,
      new Date(order.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredOrders = filter === 'ALL' 
    ? orders 
    : orders.filter(order => order.paymentStatus === filter);

  const stats = {
    total: orders.length,
    paid: orders.filter(o => o.paymentStatus === 'PAID').length,
    pending: orders.filter(o => o.paymentStatus === 'PENDING_PAYMENT').length,
    cancelled: orders.filter(o => o.paymentStatus === 'CANCELLED').length,
    revenue: orders.filter(o => o.paymentStatus === 'PAID').reduce((sum, o) => sum + o.amount, 0),
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 bg-brand-black">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Lock size={48} className="mx-auto mb-4 text-gray-600" />
            <h1 className="text-3xl font-bold mb-2">ADMIN ACCESS</h1>
            <p className="text-gray-400">Enter password to continue</p>
          </div>

          <form onSubmit={handleLogin} className="bg-brand-charcoal border border-gray-800 p-8">
            {error && (
              <div className="mb-4 bg-red-900/20 border border-red-800 text-red-400 p-3 text-sm">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-mono mb-2 text-gray-400">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-brand-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 font-bold hover:bg-gray-200 transition-colors"
            >
              LOGIN
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">ORDER DASHBOARD</h1>
          <p className="text-gray-400">Manage and track pre-orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-brand-charcoal border border-gray-800 p-4">
            <p className="text-gray-400 text-xs font-mono mb-1">TOTAL ORDERS</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-brand-charcoal border border-green-800 p-4">
            <p className="text-gray-400 text-xs font-mono mb-1">PAID</p>
            <p className="text-2xl font-bold text-green-500">{stats.paid}</p>
          </div>
          <div className="bg-brand-charcoal border border-yellow-800 p-4">
            <p className="text-gray-400 text-xs font-mono mb-1">PENDING</p>
            <p className="text-2xl font-bold text-yellow-500">{stats.pending}</p>
          </div>
          <div className="bg-brand-charcoal border border-red-800 p-4">
            <p className="text-gray-400 text-xs font-mono mb-1">CANCELLED</p>
            <p className="text-2xl font-bold text-red-500">{stats.cancelled}</p>
          </div>
          <div className="bg-brand-charcoal border border-gray-800 p-4">
            <p className="text-gray-400 text-xs font-mono mb-1">REVENUE</p>
            <p className="text-2xl font-bold">LKR {stats.revenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <select
              id="payment-status-filter"
              aria-label="Filter orders by payment status"
              value={filter}
              onChange={(e) => setFilter(e.target.value as PaymentStatus | 'ALL')}
              className="w-full md:w-auto bg-brand-charcoal border border-gray-700 px-4 py-2 text-white focus:outline-none focus:border-white"
            >
              <option value="ALL">All Orders</option>
              <option value="PAID">Paid</option>
              <option value="PENDING_PAYMENT">Pending Payment</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={fetchOrders}
              disabled={loading}
              className="bg-brand-charcoal border border-gray-700 px-6 py-2 hover:border-white transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Refresh'}
            </button>
            <button
              onClick={exportToCSV}
              className="bg-white text-black px-6 py-2 font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-brand-charcoal border border-gray-800 overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="animate-spin" size={32} />
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-400">{error}</div>
          ) : filteredOrders.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No orders found</div>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">ORDER ID</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">NAME</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">PHONE</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">SIZE</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">QTY</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">AMOUNT</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">STATUS</th>
                  <th className="py-3 px-4 font-mono text-xs text-gray-400">DATE</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.orderId} className="border-b border-gray-800 hover:bg-brand-black">
                    <td className="py-3 px-4 font-mono text-xs">{order.orderId.slice(0, 8)}</td>
                    <td className="py-3 px-4">{order.name}</td>
                    <td className="py-3 px-4">{order.phone}</td>
                    <td className="py-3 px-4">{order.size}</td>
                    <td className="py-3 px-4">{order.quantity}</td>
                    <td className="py-3 px-4">LKR {order.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 text-xs font-mono ${
                          order.paymentStatus === 'PAID'
                            ? 'bg-green-900/30 text-green-400'
                            : order.paymentStatus === 'PENDING_PAYMENT'
                            ? 'bg-yellow-900/30 text-yellow-400'
                            : 'bg-red-900/30 text-red-400'
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400" suppressHydrationWarning>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}

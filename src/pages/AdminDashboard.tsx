import { BarChart3, Package, ShoppingCart, Users, Settings, Plus, Bell } from 'lucide-react';
import { useState } from 'react';

export default function AdminDashboard() {
  const [view, setView] = useState('overview');

  return (
    <div className="flex min-h-screen bg-pearl/20 text-navy-900">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-900 text-white p-8 space-y-12">
        <div className="flex items-center gap-2">
           <span className="text-xl font-display font-bold uppercase tracking-widest text-gold-500 underline decoration-white">Admin</span>
        </div>

        <nav className="space-y-4">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'products', label: 'Products', icon: Package },
            { id: 'orders', label: 'Orders', icon: ShoppingCart },
            { id: 'customers', label: 'Customers', icon: Users },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                view === item.id ? 'bg-gold-500 text-navy-900' : 'text-gray-400 hover:text-white'
              }`}
            >
              <item.icon size={16} /> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-grow p-12">
         <header className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-display uppercase tracking-tighter">Dashboard <span className="text-gray-400">/ {view}</span></h1>
            <div className="flex items-center gap-6">
               <button className="relative text-gray-400 hover:text-navy-900">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
               </button>
               <button className="bg-navy-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gold-500 transition-all">
                  <Plus size={16} /> Add Product
               </button>
            </div>
         </header>

         {/* Stats */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { label: 'Total Revenue', value: 'PKR 1.2M', growth: '+12%', color: 'text-green-600' },
              { label: 'Orders Placed', value: '412', growth: '+5%', color: 'text-green-600' },
              { label: 'Active Customers', value: '890', growth: '+18%', color: 'text-green-600' },
              { label: 'AR Interactions', value: '2.4K', growth: '+24%', color: 'text-green-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 border border-pearl">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{stat.label}</p>
                 <div className="flex justify-between items-end">
                    <p className="text-2xl font-display font-medium">{stat.value}</p>
                    <span className={`text-[10px] font-bold ${stat.color}`}>{stat.growth}</span>
                 </div>
              </div>
            ))}
         </div>

         {/* Table Placeholder */}
         <div className="bg-white border border-pearl overflow-hidden">
            <div className="p-6 border-b border-pearl flex justify-between items-center">
               <h3 className="text-xs font-bold uppercase tracking-widest">Recent Activity</h3>
               <button className="text-[10px] font-bold uppercase tracking-widest text-gold-500">View All</button>
            </div>
            <div className="p-12 text-center text-gray-400 space-y-4">
               <Package size={40} className="mx-auto opacity-20" />
               <p className="text-sm">Real-time data stream awaiting connection...</p>
            </div>
         </div>
      </main>
    </div>
  );
}

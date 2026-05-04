import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  { label: 'Volunteer Hours', value: '124' },
  { label: 'Events Joined', value: '37' },
  { label: 'Causes Supported', value: '5' },
  { label: 'Teams Helped', value: '12' },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto py-16 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Impact</p>
        <h1 className="text-4xl font-bold tracking-tight">Impact Dashboard</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          Track your contribution over time and see how your efforts move the community forward.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <CardHeader>
                <CardTitle className="text-white text-lg">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <CardHeader>
            <CardTitle className="text-white">Monthly Momentum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: 'March', percent: '60%' },
                { month: 'April', percent: '80%' },
                { month: 'May', percent: '45%' },
              ].map(item => (
                <div key={item.month}>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{item.month}</span>
                    <span>{item.percent}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 mt-2">
                    <div className="h-full rounded-full bg-white" style={{ width: item.percent }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <CardHeader>
            <CardTitle className="text-white">Top Causes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Environment', 'Education', 'Hunger Relief', 'Community Care'].map(cause => (
                <div key={cause} className="flex items-center justify-between text-sm text-white/60">
                  <span>{cause}</span>
                  <span>Active</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

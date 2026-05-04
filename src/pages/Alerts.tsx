import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const alerts = [
  { id: 1, level: 'Urgent', title: 'Flood cleanup volunteers needed', note: 'Riverfront cleanup this weekend.' },
  { id: 2, level: 'New', title: 'Mentorship night added', note: 'Youth Code Academy opened 5 new spots.' },
  { id: 3, level: 'Update', title: 'Food drive time change', note: 'Starts at 9AM instead of 10AM.' },
];

export default function Alerts() {
  return (
    <div className="container mx-auto py-16 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Alerts</p>
        <h1 className="text-4xl font-bold tracking-tight">Community Alerts</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          Time-sensitive updates from nonprofits and volunteer coordinators.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">{alert.title}</CardTitle>
                  <Badge className="bg-white text-black border-white">{alert.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{alert.note}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

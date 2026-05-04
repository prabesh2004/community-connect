import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const saved = [
  { id: 1, name: 'Youth Code Academy', role: 'Mentor', status: 'Open' },
  { id: 2, name: 'Community Food Pantry', role: 'Driver', status: 'Pending' },
  { id: 3, name: 'Green City Initiative', role: 'Cleanup Crew', status: 'Open' },
];

export default function Profile() {
  return (
    <div className="container mx-auto py-16 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-2">Profile</p>
        <h1 className="text-4xl font-bold tracking-tight">Volunteer Profile</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          Save opportunities, track your skills, and keep your volunteer journey organized.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-white">Alex Rivera</CardTitle>
            <p className="text-sm text-white/60">Volunteer • Joined 2024</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-white/70">
              <p>Preferred causes: Education, Environment</p>
              <p>Availability: Weekends</p>
              <p>Location: Downtown</p>
            </div>
            <Button className="mt-6 w-full bg-white text-black hover:bg-white/90">Edit Profile</Button>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">Saved Opportunities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {saved.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between border border-white/10 rounded-lg p-4">
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-sm text-white/60">Role: {item.role}</p>
                </div>
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <Badge className="bg-white text-black border-white">{item.status}</Badge>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">View</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

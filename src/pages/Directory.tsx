import { useState } from 'react';
import { nonprofits, causes } from '../data/mockNonprofits';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCause, setSelectedCause] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All');

  const skills = ['All', ...Array.from(new Set(nonprofits.flatMap(np => np.needs)))];

  const filteredNonprofits = nonprofits.filter(np => {
    const matchesSearch = np.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          np.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCause = selectedCause === 'All' || np.cause === selectedCause;
    const matchesSkill = selectedSkill === 'All' || np.needs.includes(selectedSkill);
    return matchesSearch && matchesCause && matchesSkill;
  });

  return (
    <div className="container mx-auto py-12 text-white">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Directory</p>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Nonprofit Directory</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Discover and connect with local organizations making a difference in our community.
          Filter by cause or search for specific organizations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
        <div className="w-full md:w-1/2 space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input 
            id="search"
            placeholder="Search by name or description..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-wrap gap-2">
          {causes.map(cause => (
            <Badge 
              key={cause} 
              variant="outline"
              className={`cursor-pointer text-xs py-1 px-3 border transition-colors ${
                selectedCause === cause
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white/70 border-white/20 hover:border-white'
              }`}
              onClick={() => setSelectedCause(cause)}
            >
              {cause}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {skills.map(skill => (
          <Badge
            key={skill}
            variant="outline"
            className={`cursor-pointer text-xs py-1 px-3 border transition-colors ${
              selectedSkill === skill
                ? 'bg-white text-black border-white'
                : 'bg-black text-white/70 border-white/20 hover:border-white'
            }`}
            onClick={() => setSelectedSkill(skill)}
          >
            {skill}
          </Badge>
        ))}
      </div>

      {filteredNonprofits.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-xl">No nonprofits found matching your criteria.</p>
          <Button variant="link" onClick={() => {setSearchTerm(''); setSelectedCause('All')}}>Clear filters</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNonprofits.map(np => (
            <Card key={np.id} className="flex flex-col overflow-hidden border border-white/10 bg-white/5 hover:border-white transition-all shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${np.image})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-white text-black border-white">{np.cause}</Badge>
                  <span className="text-xs text-white/50 uppercase tracking-wide">{np.location}</span>
                </div>
                <CardTitle>{np.name}</CardTitle>
                <CardDescription className="line-clamp-2 text-white/70">{np.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm font-semibold mb-2 text-white">Needs Volunteers For:</p>
                <div className="flex flex-wrap gap-1">
                  {np.needs.map(need => (
                    <Badge key={need} variant="outline" className="text-xs border-white/20 text-white/70">
                      {need}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.7)]">Get Involved</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

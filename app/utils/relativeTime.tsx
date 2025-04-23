export const getRelativeTime = (dateString: string) => {
    const now = Date.now(); // це мілісекунди в UTC
    const past = new Date(dateString).getTime(); 
  
    const diff = Math.max(Math.floor((now - past) / 1000), 0);
  
    if (diff < 1) return `${diff}`;
  
    const units = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];
  
    for (let unit of units) {
      const value = Math.floor(diff / unit.seconds);
      if (value > 0) {
        return `${value} ${unit.label}${value > 1 ? 's' : ''}`;
      }
    }
  
    return 'just now';
  };
  
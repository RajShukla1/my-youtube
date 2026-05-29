import React from 'react'

const VideoCard = ({info}) => {
    const {statistics, snippet} = info;
    const {thumbnails, channelTitle, title, publishedAt} = snippet;

    // Format view count nicely
    const formatViews = (views) => {
      if (!views) return '0';
      const num = parseInt(views);
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num;
    }

    // Mock time ago for a better look
    const timeAgo = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.round((now - date) / 1000);
        const minutes = Math.round(seconds / 60);
        const hours = Math.round(minutes / 60);
        const days = Math.round(hours / 24);
        const months = Math.round(days / 30);
        const years = Math.round(months / 12);

        if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
        if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return `${seconds} sec ago`;
    };

  return (
    <div className='w-full mb-8 cursor-pointer group'>
      <div className='relative overflow-hidden rounded-xl aspect-video mb-3'>
        <img 
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-surface' 
          alt="thumbnail" 
          src={thumbnails?.medium?.url}
          loading="lazy"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }}
        />
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
           10:24
        </div>
      </div>
      
      <div className='flex gap-3 pr-2'>
        <div className='flex-shrink-0 mt-1'>
            <div className='w-9 h-9 rounded-full bg-surface-hover overflow-hidden'>
               <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(channelTitle || 'U')}&background=random`} alt={channelTitle} className='w-full h-full object-cover' loading="lazy"/>
            </div>
        </div>
        <div className='flex flex-col overflow-hidden'>
            <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-1 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" title={title}>
                {title}
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 hover:text-foreground transition-colors'>{channelTitle}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
                {formatViews(statistics?.viewCount)} views • {timeAgo(publishedAt)}
            </p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(VideoCard);
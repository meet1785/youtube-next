import { NextRequest, NextResponse } from 'next/server';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  // If no API key, return mock data for development/demo
  if (!apiKey) {
    console.warn('No YouTube API key found, returning mock data');
    return NextResponse.json({
      items: generateMockResults(query),
    });
  }

  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.append('part', 'snippet');
    url.searchParams.append('q', query);
    url.searchParams.append('type', 'video');
    url.searchParams.append('maxResults', '12');
    url.searchParams.append('key', apiKey);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }

    const data = await response.json();

    const videos: YouTubeVideo[] = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));

    return NextResponse.json({ items: videos });
  } catch (error) {
    console.error('Error fetching from YouTube API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}

function generateMockResults(query: string): YouTubeVideo[] {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `mock-video-${i}`,
    title: `${query} - Sample Video ${i + 1}`,
    description: `This is a mock video result for "${query}". In production, configure YOUTUBE_API_KEY environment variable to fetch real YouTube data.`,
    thumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
    channelTitle: `Demo Channel ${i + 1}`,
    publishedAt: new Date(Date.now() - i * 86400000).toISOString(),
  }));
}


export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface StoryTopic {
  id: number;
  germanTitle: string;
  persianTitle: string;
  audioUrl?: string;
  germanStory?: string;
  persianTranslation?: string;
}

export interface StoryContent {
  germanStory: string;
  persianTranslation: string;
  audioUrl?: string;
}

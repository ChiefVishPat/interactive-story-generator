export interface StoryOption {
  text: string;
  node_id: string;
}

export interface StoryNode {
  id: string;
  content: string;
  is_ending: boolean;
  is_winning_ending: boolean;
  options?: StoryOption[];
}

export interface Story {
  id: string;
  title: string;
  theme: string;
  root_node: StoryNode;
  all_nodes: Record<string, StoryNode>;
}

export interface Job {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  story_id?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
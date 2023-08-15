export interface Tool {
  name: string;
}

export interface Brand {
  id: number,
  title: string
  image: string,
  description: string,
  document: string,
  certificate: null | string,
  tools: string[],
  is_visible: number;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export interface Message {
  message: string;
}

export interface RepoItem {
  name:string,
  html_url:string
}

export class CommitItem {
  constructor(value: any) {
    this.node_id = value.node_id;
    this.html_url = value.html_url;
    this.description = value.description;
    this.commit = value.commit;
  }
  node_id: string;
  html_url: string;
  description: string;
  commit: {
    message: string;
    author: { date: string}
  };
}

export interface CommitDetails {
  message: string,
  author: { date: string}
}

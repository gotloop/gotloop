import { JsonProperty, JsonObject } from 'json2typescript';

import { CommentModel } from './comment.model';

/**
 * Loop is our main model class.
 */
@JsonObject('LoopModel')
export class LoopModel {
  @JsonProperty('title')
  public title: string;
  @JsonProperty('desc')
  public description: string;
  @JsonProperty('bpm')
  public bpm: number;
  @JsonProperty('count')
  public count: number;
  @JsonProperty('dur')
  public duration: number;
  @JsonProperty('tags')
  public tags?: string[];
  @JsonProperty('com')
  public isCommentable: boolean;

  public comments?: CommentModel[] = [];
  @JsonProperty('shar')
  public isSharable?: boolean;
  @JsonProperty('dat')
  public creationDate?: number;
}

export function loopFactory(): LoopModel {
  return {
    bpm: 123,
    creationDate: Date.now(),
    description: '',
    duration: 0.0,
    count: 0,
    isCommentable: true,
    comments: [],
    isSharable: true,
    tags: [],
    title: '',
  };
}

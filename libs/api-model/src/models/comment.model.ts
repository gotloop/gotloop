import { JsonProperty, JsonObject } from 'json2typescript';

import { UserModel } from './user.model';

/**
 * Modelize a user comment on a loop.
 */
@JsonObject()
export class CommentModel {
  @JsonProperty('uuid')
  public uuid: string;

  @JsonProperty('date')
  public createdAt: Date;

  @JsonProperty('author')
  public author: UserModel;

  @JsonProperty('content')
  public content: string;

}

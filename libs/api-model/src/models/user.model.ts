import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject('UserModel')
export class UserModel {
  @JsonProperty('name')
  public name: string;
  @JsonProperty('avatar')
  public avatar: string;

}

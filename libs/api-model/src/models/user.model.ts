import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject()
export class UserModel {
  @JsonProperty('name')
  public name: string;
  @JsonProperty('avatar')
  public avatar: string;

}

import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject()
export class SettingsNode {
    inputs?: SettingsLink[];
    outputs?: SettingsLink[];
    params: [];
}

@JsonObject()
export class SettingsLink {

}

@JsonObject()
export class SettingsParam {
    key:string;
    val: string;
}

@JsonObject()
export class Settings {
    @JsonProperty()
    public uuid: string;
    public nodes: SettingsNode[] = [];
    public connections: SettingsLink = [];
}

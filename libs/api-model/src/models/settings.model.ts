import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject('SettingsNode')
export class SettingsNode {
    inputs?: SettingsLink[];
    outputs?: SettingsLink[];
    params: [];
}

@JsonObject('SettingsLink')
export class SettingsLink {

}

@JsonObject('SettingsParam')
export class SettingsParam {
    key:string;
    val: string;
}

@JsonObject('Settings')
export class Settings {
    @JsonProperty()
    public uuid: string;
    public nodes: SettingsNode[] = [];
    public connections: SettingsLink = [];
}

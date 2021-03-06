import { JsonProperty } from 'json-typescript-mapper';

export interface SettingsNode {
    inputs?: SettingsLink[];
    outputs?: SettingsLink[];
}

export interface SettingsLink {

}
export class Settings {
    public uuid: string;
    public nodes: SettingsNode[] = [];
    public connections: SettingsLink = [];
}

export default Settings;

import {SettingItemType} from 'api/types'
import joplin from "../api";

export async function registerSettings() {
    await joplin.settings.registerSection('outline.settings', {
        label: 'Outline',
        iconName: 'fas fa-align-justify'
    });

    await joplin.settings.registerSetting('fontFamily', {
        type: SettingItemType.String,
        value: 'var(--joplin-font-family)',
        description: 'var(--joplin-font-family)',
        section: 'outline.settings',
        public: true,
        label: 'Font Family'
    });
    await joplin.settings.registerSetting('fontSize', {
        type: SettingItemType.Int,
        value: '10',
        description: 'Default: 10pt',
        section: 'outline.settings',
        public: true,
        label: 'Font Size (pt)'
    });
    await  joplin.settings.registerSetting('fontWeight', {
        type: SettingItemType.String,
        value: 'normal',
        description: 'bold/normal/lighter',
        section: 'outline.settings',
        public: true,
        label: 'Font Weight'
    });
    await joplin.settings.registerSetting('fontColor', {
        type: SettingItemType.String,
        value: 'var(--joplin-color)',
        description: 'var(--joplin-color)',
        section: 'outline.settings',
        public: true,
        label: 'Font Color'
    });
    await joplin.settings.registerSetting('h1Prefix', {
        type: SettingItemType.String,
        value: '',
        section: 'outline.settings',
        public: true,
        label: 'H1 Prefix'
    });
    await joplin.settings.registerSetting('h2Prefix', {
        type: SettingItemType.String,
        value: '',
        section: 'outline.settings',
        public: true,
        label: 'H2 Prefix'
    });
    await joplin.settings.registerSetting('h3Prefix', {
        type: SettingItemType.String,
        value: '',
        section: 'outline.settings',
        public: true,
        label: 'H3 Prefix'
    });
    await joplin.settings.registerSetting('h4Prefix', {
        type: SettingItemType.String,
        value: '',
        section: 'outline.settings',
        public: true,
        label: 'H4 Prefix'
    });
    await joplin.settings.registerSetting('h5Prefix', {
        type: SettingItemType.String,
        value: '',
        section: 'outline.settings',
        public: true,
        label: 'H5 Prefix'
    });
    await joplin.settings.registerSetting('h6Prefix', {
        type: SettingItemType.String,
        value: '',
        section: 'outline.settings',
        public: true,
        label: 'H6 Prefix'
    });
}

export async function settingValue(key: string) {
    return await joplin.settings.value(key)
}

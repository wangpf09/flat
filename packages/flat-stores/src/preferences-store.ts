import { FlatPrefersColorScheme, Region } from "flat-components";
import { FlatI18n } from "@netless/flat-i18n";
import { autoPersistStore } from "./utils/auto-persist-store";

// clear storage if not match
const LS_VERSION = 1;

/**
 * User preferences
 *
 * Properties in Preferences Store are persisted and shared globally.
 */
export class PreferencesStore {
    /** Turn on camera when joining room */
    public autoCameraOn = false;
    /** Turn on mic when joining room */
    public autoMicOn = true;
    /** Region, default by language */
    public region: Region | null = null;
    /** selected camera device id on devices test page */
    public cameraId?: string | null = null;
    /** selected microphone device id on devices test page */
    public microphoneId?: string | null = null;
    /** selected speaker device id on devices test page */
    public speakerId?: string | null = null;

    public prefersColorScheme: FlatPrefersColorScheme = "light";
    /** Turn on recording on joining room */
    public autoRecording = false;
    /** Show or hide stroke tails */
    public strokeTail = true;

    public constructor() {
        autoPersistStore({ storeLSName: "PreferencesStore", store: this, version: LS_VERSION });
    }

    public updateAutoCameraOn = (isOn: boolean): void => {
        this.autoCameraOn = isOn;
    };

    public updateAutoMicOn = (isOn: boolean): void => {
        this.autoMicOn = isOn;
    };

    public updateCameraId = (cameraId: string): void => {
        this.cameraId = cameraId;
    };

    public updateMicrophoneId = (microphoneId: string): void => {
        this.microphoneId = microphoneId;
    };

    public updateSpeakerId = (speakerId: string): void => {
        this.speakerId = speakerId;
    };

    public setRegion = (region: Region): void => {
        this.region = region;
    };

    public getRegion = (): Region => {
        return (
            this.region ||
            (FlatI18n.getInstance().language.startsWith("zh") ? Region.CN_HZ : Region.US_SV)
        );
    };

    public updatePrefersColorScheme = (prefersColorScheme: FlatPrefersColorScheme): void => {
        this.prefersColorScheme = prefersColorScheme;
    };

    public toggleAutoRecording = (): void => {
        this.autoRecording = !this.autoRecording;
    };

    public toggleStrokeTail = (): void => {
        this.strokeTail = !this.strokeTail;
    };
}

export const preferencesStore = new PreferencesStore();

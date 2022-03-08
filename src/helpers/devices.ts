import { DeviceType } from "../enums/devices";

export const deviceTypeIs = (deviceType: DeviceType) => {
	switch (deviceType) {
		case DeviceType.Mobile:
			return window.matchMedia(`(max-width: ${599}px)`).matches;
		case DeviceType.Tablet:
			return window.matchMedia(`(min-width: ${600}px) and (max-width: ${1279}px)`).matches;
		case DeviceType.Desktop:
			return window.matchMedia(`(min-width: ${1280}px)`).matches;
		default:
			return;
	}
};
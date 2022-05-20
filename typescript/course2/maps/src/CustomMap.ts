/// <reference types="@types/google.maps" />

export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(elID: string) {
		this.googleMap = new google.maps.Map(document.getElementById(elID), {
			zoom: 1,
			center: {
				lat: 1,
				lng: 1,
			},
		});
	}

	addMarker(object: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: object.location,
		});
	}
}

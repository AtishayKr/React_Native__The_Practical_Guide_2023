class Place {
    constructor(title, imageUri, address, location) {
        this.title = title,
        this.imageUri = imageUri,
        this.address = address,
        this.location = location //{lat: 0.4343, lng: 134.893}
        this.id = new Date().toString + Math.random().toString();
    }
}
const CANADA_CITIES = [
    'Vancouver', 'Toronto', 'Ottawa', 'Quebec city', 'Winnipeg',
    'Edmonton', 'Fredericton', 'Halifax', 'Charlottetown', 'Regina',
    'Yellowknife', 'Iqaluit', 'Whitehorse'];

export class LocationService {
    static async getCities() {
        return Promise.resolve(CANADA_CITIES);
    }
}
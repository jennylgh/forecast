import {getSerpSearchUrl} from "./apiConfigs";
import {httpGet} from "./httpUtils";

export class ImageSearchService {
    static async getImage(keyword: string) {
        const url = getSerpSearchUrl(keyword);
        const res = await httpGet(url);
        return ImageSearchService.getRandomImage(res);
    }

    private static getRandomImage(response: any) {
        let { image_results: results = [] } = response;
        results = results.filter((r: any) => r.image);

        if (results.length > 0) {
            const randomIndex = Math.round(Math.random() * (results.length - 1));
            return results[randomIndex].image as string;
        }

        return undefined;
    }
}
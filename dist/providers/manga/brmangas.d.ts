import { IMangaChapterPage, IMangaInfo, IMangaResult, ISearch, MangaParser } from '../../models';
declare class BRMangas extends MangaParser {
    readonly name = "BRMangas";
    protected baseUrl: string;
    protected logo: string;
    protected classPath: string;
    fetchMangaInfo: (mangaId: string) => Promise<IMangaInfo>;
    fetchChapterPages: (chapterId: string) => Promise<IMangaChapterPage[]>;
    /**
     *
     * @param query Search query
     */
    search: (query: string) => Promise<ISearch<IMangaResult>>;
}
export default BRMangas;

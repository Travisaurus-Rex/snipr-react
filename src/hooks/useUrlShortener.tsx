import { useRef, useState } from 'react';
import type { ShortenedURL } from '../models/ShortenedURL';

const useUrlShortener = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ShortenedURL | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const baseURL = 'https://localhost:8080/';
    const abortControllerRef = useRef<AbortController | null>(null);

    const shorten = async (longURL: string) => {
        if (!longURL.trim()) return;

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(
                `${baseURL}shorten?long_url=${encodeURIComponent(longURL)}`,
                { signal: controller.signal }
            )

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`)
            }

            const result: ShortenedURL = await res.json();
            setData(result);
        } catch(err: unknown) {
            if (err instanceof Error && err.name !== "AbortError") {
                console.error(err);
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    }

    return { loading, data, error, shorten };
}

export default useUrlShortener;
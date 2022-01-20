/* eslint-disable @typescript-eslint/naming-convention */
import {APODResult} from 'APOD';
import {APODCard} from 'components/APODCard';
import {ErrorBanner} from 'components/PageError';
import {SkeletonAPODCard} from 'components/SkeletonAPODCard';
import moment from 'moment';
import {useState, useEffect} from 'react';

interface APODCardListProps {
  page: number;
}

interface APODItem {
  id: string;
  item: APODResult;
  liked: boolean;
}

export function APODCardList({page}: APODCardListProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<APODItem[]>([]);

  const setLiked = (id: string, liked: boolean) => {
    setItems((items) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) return {...item, liked};
        return item;
      });
      return updatedItems;
    });
  };

  useEffect(() => {
    // TODO abstract this into API wrapper
    // TODO add store (with indexedDB sync for caching & storing likes)
    /* Since hitting NASA API on frontend, impossible not to expose key.
     * Ideally, I'd create a wrapper cloud function (ie. lambda@edge, cloudflare worker...) & implement quotas per-user
     * Alternatively, could use SSR or React Server Components or HTML streaming
     */
    const startDate = moment()
      .subtract(10 * (page + 1) - 1, 'd')
      .format('YYYY-MM-DD');
    const endDate = moment()
      .subtract(10 * page, 'd')
      .format('YYYY-MM-DD');
    setIsLoaded(false);
    const paramObj = {
      api_key: 'IF48Q1mc5u5nwZMQHnbSmEDJU8kxlmCzzUABNfUF',
      start_date: startDate,
      end_date: endDate,
    };
    const params = new URLSearchParams(paramObj);
    fetch(`https://api.nasa.gov/planetary/apod?${params.toString()}`)
      .then((res) => {
        if (res.ok) return res.json();
        let errorMessage = '';
        switch (res.status) {
          case 403:
            errorMessage =
              'Authentication error. Ensure you are using a valid API key';
            break;
          default:
            errorMessage = `Unrecognized error: NASA API response: ${JSON.stringify(
              res,
            )}`;
            break;
        }
        throw Error(errorMessage);
      })
      .then(
        (result: APODResult[]) => {
          setIsLoaded(true);
          setItems(() => {
            const newItems = result
              .map((resItem) => {
                return {id: resItem.date, item: resItem, liked: false};
              })

              // eslint-disable-next-line id-length
              .sort((a, b) => moment(b.item.date).diff(moment(a.item.date)));
            return newItems;
          });
        },
        (error: Error) => {
          setIsLoaded(true);
          setError(error.message);
        },
      )
      .catch((err) => setError(err));
  }, [page]);

  if (error) {
    return (
      <ErrorBanner title="API Error" description={error} status="critical" />
    );
  } else if (!isLoaded) {
    return (
      <>
        {[...Array(10)].map((_, i) => (
          <SkeletonAPODCard key={i} />
        ))}
      </>
    );
  } else {
    const cards = items.map(({id, item, liked}) => (
      <APODCard
        key={id}
        item={item}
        liked={liked}
        setLiked={(liked: boolean) => setLiked(id, liked)}
      />
    ));
    return <>{cards}</>;
  }
}

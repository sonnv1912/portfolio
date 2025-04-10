import { useQueryStates, parseAsString } from 'nuqs';

export const useNavigator = () => {
   const [query, setQuery] = useQueryStates({
      tab: parseAsString.withDefault('').withOptions({
         clearOnDefault: true,
         history: 'push',
      }),
      name: parseAsString.withDefault('').withOptions({
         clearOnDefault: true,
         history: 'push',
      }),
      tabPage: parseAsString.withDefault('').withOptions({
         clearOnDefault: true,
         history: 'push',
      }),
   });

   return {
      query,

      setQuery,
   };
};

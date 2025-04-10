import { images } from 'assets';

export const languages: Record<
   string,
   {
      image: string;
      label: string;
      code: string;
   }
> = {
   us: {
      image: images.UnitedState,
      label: 'English',
      code: 'us',
   },
   vn: {
      image: images.VietNam,
      label: 'Tiếng Việt',
      code: 'vn',
   },
};

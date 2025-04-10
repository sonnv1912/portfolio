import UnitedStateImage from '@assets/images/img-united-states.png';
import VietNamImage from '@assets/images/img-viet-nam.png';

export const languages: Record<
   string,
   {
      image: string;
      label: string;
      code: string;
   }
> = {
   us: {
      image: UnitedStateImage,
      label: 'English',
      code: 'us',
   },
   vn: {
      image: VietNamImage,
      label: 'Tiếng Việt',
      code: 'vn',
   },
};

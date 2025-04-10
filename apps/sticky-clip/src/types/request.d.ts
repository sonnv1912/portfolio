type OctokitRequestProps = {
   endpoint: string;
   repo: string;
};

type OctokitRequestResponse<T> = {
   data: T;
   url?: string;
   status: 200;
   header?: object;
};

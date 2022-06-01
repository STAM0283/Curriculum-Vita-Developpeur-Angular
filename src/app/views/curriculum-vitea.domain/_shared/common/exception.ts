// Interface that describes the raised exception fields.

export interface IException {
  Message?: string;
}

// interface that manages the recording of data retrieved via the web service.

export interface IResponse<T> extends IException{
  Data: T;
  IsSuccessful: boolean;
}

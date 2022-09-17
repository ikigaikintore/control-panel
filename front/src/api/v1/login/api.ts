/* tslint:disable */
/* eslint-disable */
/**
 * Login
 * Login services
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Login
 */
export interface Login {
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    password?: string;
}
/**
 * 
 * @export
 * @interface SignIn
 */
export interface SignIn {
    /**
     * 
     * @type {string}
     * @memberof SignIn
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof SignIn
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof SignIn
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    token?: string;
}

/**
 * LoginApi - axios parameter creator
 * @export
 */
export const LoginApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Login to page
         * @param {Login} [login] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (login?: Login, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(login, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoginApi - functional programming interface
 * @export
 */
export const LoginApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Login to page
         * @param {Login} [login] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(login?: Login, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Token>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(login, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoginApi - factory interface
 * @export
 */
export const LoginApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginApiFp(configuration)
    return {
        /**
         * 
         * @summary Login to page
         * @param {Login} [login] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(login?: Login, options?: any): AxiosPromise<Token> {
            return localVarFp.login(login, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export class LoginApi extends BaseAPI {
    /**
     * 
     * @summary Login to page
     * @param {Login} [login] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginApi
     */
    public login(login?: Login, options?: any) {
        return LoginApiFp(this.configuration).login(login, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SigninApi - axios parameter creator
 * @export
 */
export const SigninApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sign in
         * @param {SignIn} [signIn] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn: async (signIn?: SignIn, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/signin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SigninApi - functional programming interface
 * @export
 */
export const SigninApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SigninApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sign in
         * @param {SignIn} [signIn] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signIn(signIn?: SignIn, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signIn(signIn, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SigninApi - factory interface
 * @export
 */
export const SigninApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SigninApiFp(configuration)
    return {
        /**
         * 
         * @summary Sign in
         * @param {SignIn} [signIn] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn(signIn?: SignIn, options?: any): AxiosPromise<void> {
            return localVarFp.signIn(signIn, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SigninApi - object-oriented interface
 * @export
 * @class SigninApi
 * @extends {BaseAPI}
 */
export class SigninApi extends BaseAPI {
    /**
     * 
     * @summary Sign in
     * @param {SignIn} [signIn] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SigninApi
     */
    public signIn(signIn?: SignIn, options?: any) {
        return SigninApiFp(this.configuration).signIn(signIn, options).then((request) => request(this.axios, this.basePath));
    }
}



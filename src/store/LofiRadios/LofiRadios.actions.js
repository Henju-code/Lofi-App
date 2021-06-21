import type from '../types'

export function loadRadios (urlPath) {
    return {
        type: type.LOAD_RADIOS_SAGA,
        payload: urlPath
    }
}
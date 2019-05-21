use wasm_bindgen::prelude::*;

#[wasm_bindgen(catch)]
pub fn optimize(bytes: &[u8]) -> Result<Vec<u8>, JsValue> {
    match oxipng::optimize_from_memory(bytes, &oxipng::Options::default()) {
        Ok(ret) => Ok(ret),
        Err(_) => Err(JsValue::from_str("Failed optimize...")),
    }
}

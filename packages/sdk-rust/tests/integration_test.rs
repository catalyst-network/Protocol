extern crate catalyst_protocol_sdk_rust;
use catalyst_protocol_sdk_rust::prelude::*;
use catalyst_protocol_sdk_rust::Cryptography::ErrorCode;

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn can_access_value_of_error_code(){
        ErrorCode::NO_ERROR.value();
    }
}
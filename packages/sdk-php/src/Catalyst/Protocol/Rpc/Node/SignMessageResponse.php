<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Rpc.proto

namespace Catalyst\Protocol\Rpc\Node;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Catalyst.Protocol.Rpc.Node.SignMessageResponse</code>
 */
class SignMessageResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes signature = 1;</code>
     */
    protected $signature = '';
    /**
     * Generated from protobuf field <code>bytes public_key = 2;</code>
     */
    protected $public_key = '';
    /**
     * Generated from protobuf field <code>bytes original_message = 3;</code>
     */
    protected $original_message = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $signature
     *     @type string $public_key
     *     @type string $original_message
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Rpc::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bytes signature = 1;</code>
     * @return string
     */
    public function getSignature()
    {
        return $this->signature;
    }

    /**
     * Generated from protobuf field <code>bytes signature = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setSignature($var)
    {
        GPBUtil::checkString($var, False);
        $this->signature = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes public_key = 2;</code>
     * @return string
     */
    public function getPublicKey()
    {
        return $this->public_key;
    }

    /**
     * Generated from protobuf field <code>bytes public_key = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setPublicKey($var)
    {
        GPBUtil::checkString($var, False);
        $this->public_key = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes original_message = 3;</code>
     * @return string
     */
    public function getOriginalMessage()
    {
        return $this->original_message;
    }

    /**
     * Generated from protobuf field <code>bytes original_message = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setOriginalMessage($var)
    {
        GPBUtil::checkString($var, False);
        $this->original_message = $var;

        return $this;
    }

}


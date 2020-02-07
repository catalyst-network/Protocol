<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Rpc.proto

namespace Catalyst\Protocol\Rpc\Node;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Protobuf type <code>Catalyst.Protocol.Rpc.Node.SignMessageResponse</code>
 */
class SignMessageResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * <code>bytes signature = 1;</code>
     */
    private $signature = '';
    /**
     * <code>bytes public_key = 2;</code>
     */
    private $public_key = '';
    /**
     * <code>bytes original_message = 3;</code>
     */
    private $original_message = '';

    public function __construct() {
        \GPBMetadata\Rpc::initOnce();
        parent::__construct();
    }

    /**
     * <code>bytes signature = 1;</code>
     */
    public function getSignature()
    {
        return $this->signature;
    }

    /**
     * <code>bytes signature = 1;</code>
     */
    public function setSignature($var)
    {
        GPBUtil::checkString($var, False);
        $this->signature = $var;
    }

    /**
     * <code>bytes public_key = 2;</code>
     */
    public function getPublicKey()
    {
        return $this->public_key;
    }

    /**
     * <code>bytes public_key = 2;</code>
     */
    public function setPublicKey($var)
    {
        GPBUtil::checkString($var, False);
        $this->public_key = $var;
    }

    /**
     * <code>bytes original_message = 3;</code>
     */
    public function getOriginalMessage()
    {
        return $this->original_message;
    }

    /**
     * <code>bytes original_message = 3;</code>
     */
    public function setOriginalMessage($var)
    {
        GPBUtil::checkString($var, False);
        $this->original_message = $var;
    }

}


<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Cryptography.proto

namespace Catalyst\Protocol\Cryptography;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * <pre>
 *Holds data for batch verification of signatures.
 * </pre>
 *
 * Protobuf type <code>Catalyst.Protocol.Cryptography.SignatureBatch</code>
 */
class SignatureBatch extends \Google\Protobuf\Internal\Message
{
    /**
     * <code>repeated bytes signatures = 1;</code>
     */
    private $signatures;
    /**
     * <code>repeated bytes public_keys = 2;</code>
     */
    private $public_keys;
    /**
     * <code>repeated bytes messages = 3;</code>
     */
    private $messages;
    /**
     * <code>bytes context = 4;</code>
     */
    private $context = '';

    public function __construct() {
        \GPBMetadata\Cryptography::initOnce();
        parent::__construct();
    }

    /**
     * <code>repeated bytes signatures = 1;</code>
     */
    public function getSignatures()
    {
        return $this->signatures;
    }

    /**
     * <code>repeated bytes signatures = 1;</code>
     */
    public function setSignatures(&$var)
    {
        GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->signatures = $var;
    }

    /**
     * <code>repeated bytes public_keys = 2;</code>
     */
    public function getPublicKeys()
    {
        return $this->public_keys;
    }

    /**
     * <code>repeated bytes public_keys = 2;</code>
     */
    public function setPublicKeys(&$var)
    {
        GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->public_keys = $var;
    }

    /**
     * <code>repeated bytes messages = 3;</code>
     */
    public function getMessages()
    {
        return $this->messages;
    }

    /**
     * <code>repeated bytes messages = 3;</code>
     */
    public function setMessages(&$var)
    {
        GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::BYTES);
        $this->messages = $var;
    }

    /**
     * <code>bytes context = 4;</code>
     */
    public function getContext()
    {
        return $this->context;
    }

    /**
     * <code>bytes context = 4;</code>
     */
    public function setContext($var)
    {
        GPBUtil::checkString($var, False);
        $this->context = $var;
    }

}


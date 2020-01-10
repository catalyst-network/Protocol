<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Common.proto

namespace Catalyst\Protocol\Common;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 **
 * Core protocol messages to be sent across the network.
 * - peerId is the sender's peerId
 * - correlationId is a 16 bytes guid used to match responses to their original requests
 * - type_url is the shortened protocol name of the message type being encoded in the value field (cf Any from protobuf WellKnownTypes)
 * - value is the actual value of the message being wrapped (cf Any from protobuf WellKnownTypes)
 *
 * Generated from protobuf message <code>Catalyst.Protocol.Common.ProtocolMessage</code>
 */
class ProtocolMessage extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.Catalyst.Protocol.Common.PeerId peerId = 1;</code>
     */
    private $peerId = null;
    /**
     * Generated from protobuf field <code>bytes correlationId = 2;</code>
     */
    private $correlationId = '';
    /**
     * Generated from protobuf field <code>string type_url = 3;</code>
     */
    private $type_url = '';
    /**
     * Generated from protobuf field <code>bytes value = 4;</code>
     */
    private $value = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Catalyst\Protocol\Common\PeerId $peerId
     *     @type string $correlationId
     *     @type string $type_url
     *     @type string $value
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Common::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.Catalyst.Protocol.Common.PeerId peerId = 1;</code>
     * @return \Catalyst\Protocol\Common\PeerId
     */
    public function getPeerId()
    {
        return $this->peerId;
    }

    /**
     * Generated from protobuf field <code>.Catalyst.Protocol.Common.PeerId peerId = 1;</code>
     * @param \Catalyst\Protocol\Common\PeerId $var
     * @return $this
     */
    public function setPeerId($var)
    {
        GPBUtil::checkMessage($var, \Catalyst\Protocol\Common\PeerId::class);
        $this->peerId = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes correlationId = 2;</code>
     * @return string
     */
    public function getCorrelationId()
    {
        return $this->correlationId;
    }

    /**
     * Generated from protobuf field <code>bytes correlationId = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setCorrelationId($var)
    {
        GPBUtil::checkString($var, False);
        $this->correlationId = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string type_url = 3;</code>
     * @return string
     */
    public function getTypeUrl()
    {
        return $this->type_url;
    }

    /**
     * Generated from protobuf field <code>string type_url = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setTypeUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->type_url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes value = 4;</code>
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Generated from protobuf field <code>bytes value = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkString($var, False);
        $this->value = $var;

        return $this;
    }

}


<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Wire.proto

namespace Catalyst\Protocol\Wire;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Catalyst.Protocol.Wire.TransactionBroadcast</code>
 */
class TransactionBroadcast extends \Google\Protobuf\Internal\Message
{
    /**
     * 0 field for confidential transaction
     *
     * Generated from protobuf field <code>.Catalyst.Protocol.Transaction.PublicEntry public_entry = 1;</code>
     */
    private $public_entry = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Catalyst\Protocol\Transaction\PublicEntry $public_entry
     *           0 field for confidential transaction
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Wire::initOnce();
        parent::__construct($data);
    }

    /**
     * 0 field for confidential transaction
     *
     * Generated from protobuf field <code>.Catalyst.Protocol.Transaction.PublicEntry public_entry = 1;</code>
     * @return \Catalyst\Protocol\Transaction\PublicEntry
     */
    public function getPublicEntry()
    {
        return $this->public_entry;
    }

    /**
     * 0 field for confidential transaction
     *
     * Generated from protobuf field <code>.Catalyst.Protocol.Transaction.PublicEntry public_entry = 1;</code>
     * @param \Catalyst\Protocol\Transaction\PublicEntry $var
     * @return $this
     */
    public function setPublicEntry($var)
    {
        GPBUtil::checkMessage($var, \Catalyst\Protocol\Transaction\PublicEntry::class);
        $this->public_entry = $var;

        return $this;
    }

}


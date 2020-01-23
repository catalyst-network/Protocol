<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Deltas.proto

namespace Catalyst\Protocol\Deltas;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 **
 * CandidateDeltaBroadcast
 * DeltaHash: The hash computed for the current delta produced by ProducerId.
 *	This is meant to be used when voting for most popular hashes.
 * PreviousDeltaDfsHash: The DFS address for the content of the delta preceding this candidate.
 * ProducerId: Identifier of the producer of the candidate.
 *
 * Generated from protobuf message <code>Catalyst.Protocol.Deltas.CandidateDeltaBroadcast</code>
 */
class CandidateDeltaBroadcast extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes Hash = 1;</code>
     */
    private $Hash = '';
    /**
     * Generated from protobuf field <code>.Catalyst.Protocol.Common.PeerId ProducerId = 2;</code>
     */
    private $ProducerId = null;
    /**
     * Generated from protobuf field <code>bytes PreviousDeltaDfsHash = 3;</code>
     */
    private $PreviousDeltaDfsHash = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $Hash
     *     @type \Catalyst\Protocol\Common\PeerId $ProducerId
     *     @type string $PreviousDeltaDfsHash
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Deltas::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bytes Hash = 1;</code>
     * @return string
     */
    public function getHash()
    {
        return $this->Hash;
    }

    /**
     * Generated from protobuf field <code>bytes Hash = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setHash($var)
    {
        GPBUtil::checkString($var, False);
        $this->Hash = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.Catalyst.Protocol.Common.PeerId ProducerId = 2;</code>
     * @return \Catalyst\Protocol\Common\PeerId
     */
    public function getProducerId()
    {
        return $this->ProducerId;
    }

    /**
     * Generated from protobuf field <code>.Catalyst.Protocol.Common.PeerId ProducerId = 2;</code>
     * @param \Catalyst\Protocol\Common\PeerId $var
     * @return $this
     */
    public function setProducerId($var)
    {
        GPBUtil::checkMessage($var, \Catalyst\Protocol\Common\PeerId::class);
        $this->ProducerId = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bytes PreviousDeltaDfsHash = 3;</code>
     * @return string
     */
    public function getPreviousDeltaDfsHash()
    {
        return $this->PreviousDeltaDfsHash;
    }

    /**
     * Generated from protobuf field <code>bytes PreviousDeltaDfsHash = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setPreviousDeltaDfsHash($var)
    {
        GPBUtil::checkString($var, False);
        $this->PreviousDeltaDfsHash = $var;

        return $this;
    }

}

<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Wire.proto

namespace Catalyst\Protocol\Wire;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Catalyst.Protocol.Wire.CandidateDeltaBroadcast</code>
 */
class CandidateDeltaBroadcast extends \Google\Protobuf\Internal\Message
{
    /**
     * The hash computed for the current delta produced by ProducerId. This is meant to be used when voting for most popular hashes.
     *
     * Generated from protobuf field <code>bytes hash = 1;</code>
     */
    protected $hash = '';
    /**
     * Identifier of the producer of the candidate.
     *
     * Generated from protobuf field <code>.Catalyst.Protocol.Peer.PeerId producer_id = 2;</code>
     */
    protected $producer_id = null;
    /**
     * The DFS address for the content of the delta preceding this candidate.
     *
     * Generated from protobuf field <code>bytes previous_delta_dfs_hash = 3;</code>
     */
    protected $previous_delta_dfs_hash = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $hash
     *           The hash computed for the current delta produced by ProducerId. This is meant to be used when voting for most popular hashes.
     *     @type \Catalyst\Protocol\Peer\PeerId $producer_id
     *           Identifier of the producer of the candidate.
     *     @type string $previous_delta_dfs_hash
     *           The DFS address for the content of the delta preceding this candidate.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Wire::initOnce();
        parent::__construct($data);
    }

    /**
     * The hash computed for the current delta produced by ProducerId. This is meant to be used when voting for most popular hashes.
     *
     * Generated from protobuf field <code>bytes hash = 1;</code>
     * @return string
     */
    public function getHash()
    {
        return $this->hash;
    }

    /**
     * The hash computed for the current delta produced by ProducerId. This is meant to be used when voting for most popular hashes.
     *
     * Generated from protobuf field <code>bytes hash = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setHash($var)
    {
        GPBUtil::checkString($var, False);
        $this->hash = $var;

        return $this;
    }

    /**
     * Identifier of the producer of the candidate.
     *
     * Generated from protobuf field <code>.Catalyst.Protocol.Peer.PeerId producer_id = 2;</code>
     * @return \Catalyst\Protocol\Peer\PeerId
     */
    public function getProducerId()
    {
        return $this->producer_id;
    }

    /**
     * Identifier of the producer of the candidate.
     *
     * Generated from protobuf field <code>.Catalyst.Protocol.Peer.PeerId producer_id = 2;</code>
     * @param \Catalyst\Protocol\Peer\PeerId $var
     * @return $this
     */
    public function setProducerId($var)
    {
        GPBUtil::checkMessage($var, \Catalyst\Protocol\Peer\PeerId::class);
        $this->producer_id = $var;

        return $this;
    }

    /**
     * The DFS address for the content of the delta preceding this candidate.
     *
     * Generated from protobuf field <code>bytes previous_delta_dfs_hash = 3;</code>
     * @return string
     */
    public function getPreviousDeltaDfsHash()
    {
        return $this->previous_delta_dfs_hash;
    }

    /**
     * The DFS address for the content of the delta preceding this candidate.
     *
     * Generated from protobuf field <code>bytes previous_delta_dfs_hash = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setPreviousDeltaDfsHash($var)
    {
        GPBUtil::checkString($var, False);
        $this->previous_delta_dfs_hash = $var;

        return $this;
    }

}

